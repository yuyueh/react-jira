import qs from 'qs';
import { useEffect, useState } from 'react';
import { clearEmptyKeys } from '../utils/common';
import useDebounce from '../utils/hooks/useDebounce';
import useMount from '../utils/hooks/useMount';
import { ProjectList } from './ProjectList';
import { SearchPanel } from './SearchPanel';
import { Project, SearchParams, User } from './types';

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);
    const [searchParams, setSearchParams] = useState<SearchParams>({});
    const debouncedSearchParams = useDebounce(searchParams, 500);

    useMount(() => {
        fetch(`${apiUrl}/users`).then(async (res) => {
            const result = await res.json();
            setUsers(result);
        });
    });

    useEffect(() => {
        fetch(
            `${apiUrl}/projects?${qs.stringify(
                clearEmptyKeys(debouncedSearchParams)
            )}`
        ).then(async (res) => {
            const result = await res.json();
            setProjects(result);
        });
    }, [debouncedSearchParams]);

    return (
        <div>
            <SearchPanel
                params={searchParams}
                onChange={setSearchParams}
                users={users}
            />
            <ProjectList projects={projects} users={users} />
        </div>
    );
};

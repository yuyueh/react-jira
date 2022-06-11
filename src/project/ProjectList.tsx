import { Project, User } from './types';

export interface ProjectListProps {
    projects: Project[];
    users: User[];
}

export const ProjectList = ({ projects, users }: ProjectListProps) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>編號</th>
                    <th>項目名稱</th>
                    <th>負責人</th>
                    <th>建立日期</th>
                </tr>
            </thead>
            <tbody>
                {projects.map((project) => (
                    <tr key={project.id}>
                        <td>{project.id}</td>
                        <td>{project.name}</td>
                        <td>{project.ownerId}</td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

import { SearchParams, User } from './types';

export interface SearchPanelProps {
    params: SearchParams;
    users: User[];
    onChange: (value: SearchParams) => void;
}

export const SearchPanel = ({ params, users, onChange }: SearchPanelProps) => {
    return (
        <>
            <input
                type="text"
                placeholder="請輸入 project 名稱"
                value={params.name || ''}
                onChange={(e) => {
                    onChange({ ...params, name: e.target.value });
                }}
            />
            <select
                value={params.ownerId}
                onChange={(e) => {
                    onChange({ ...params, ownerId: +e.target.value });
                }}
            >
                <option>負責人</option>
                {users.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>
        </>
    );
};

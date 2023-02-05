export interface RepositoryDTO {
    id: string | number;
    name: string;
    stargazers_count: number;
    html_url: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}
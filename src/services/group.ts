import { Group } from "../models/Group";

const getGroups = async (): Promise<Group[]> => {
    const response = await fetch('http://localhost:3000/groups');
    return response.json();
}

export { getGroups };
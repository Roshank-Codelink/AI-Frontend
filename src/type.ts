export interface NavLinkList {
    url: string;
    icon: React.ElementType;
    title: string;
}


export interface Notification{
    title: string,
    description: string,
};


export interface Projects{
    title: string,
    description: string,
    status: string,
    createdAt: string,

}

export interface Employees{
    id: number,
    name: string,
    email: string,
    role: string,
    avatar: string,
    status: string,
}


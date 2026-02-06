export const ROLES = {
    apprenant : 1,
    admin : 2
}

const AllRoles = {
    [ROLES.apprenant] : [],
    [ROLES.admin] : []
}

export const roles = Object.values(ROLES)
export const roleRight = new Map(Object.entries(AllRoles).map(([key, value]) => [Number(key), value]))


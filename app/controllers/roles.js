const AllRoles = {
    apprenant : [],
    admin : []
}

export const roles = Object.keys(AllRoles)
export const roleRight = new Map(Object.entries(AllRoles))


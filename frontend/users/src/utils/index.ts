export const prepareRows = (rows: Array<Row>): Array<PreapreRow> => {
    return rows.map((el) => {
        return { id: el.id, email: el.email, lastLogonAt: el.lastLogonAt, lastName: el.profile.lastName, firstName: el.profile.firstName, registeredAt: el.registeredAt }
    })
}

export const sortByDate = (rows: Array<PreapreRow>, field: string, sortDirection: boolean) => {
    return rows.sort(function (a, b) {
        if (sortDirection) {
            return new Date(a[field]) - new Date(b[field])
        }
        return new Date(b[field]) - new Date(a[field]);
    })
};

export const sortByAlphabet = (rows: Array<PreapreRow>, field: string, sortDirection: boolean) => {
    return rows.sort(function (a, b) {
        if (a[field] < b[field]) {
            return sortDirection ? 1 : -1;
        }
        if (a[field] > b[field]) {
            return sortDirection ? -1 : 1;
        }
        return 0;
    });
};
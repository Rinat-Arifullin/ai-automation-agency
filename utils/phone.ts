export const formatPhoneNumber = (value:string):string => {
    const cleaned = ('' + value).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{1,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);

    if (!match) return '';

    return `+${match[1]}${match[2] ? ' (' + match[2] : ''}${match[3] ? ') ' + match[3] : ''}${match[4] ? ' ' + match[4] : ''}`;
};
const formatPrice = (price: number) => {
    let formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    let formattedPrice = formatter.format(price);
    let newPrice = formattedPrice.slice(0,2)+formattedPrice.slice(3)
    return newPrice.slice(0, -3);;
}
const formatName = (name: string, brand:string) => {
    if (name.indexOf(brand) === -1) {
        return `${brand} ${name}`;
    } else {
        return name;
    }
}

export { formatPrice, formatName }
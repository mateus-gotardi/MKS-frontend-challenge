import { formatName, formatPrice } from "../utils/functions";

describe("this functions should format the name and price", () => {
    it("should add a brand to the product name without brand", () => {
        const name = "test product";
        const brand = "brand";
        expect(formatName(name, brand)).toEqual("brand test product");
    });
    it ('should not add a brand to a product that already have one', ()=>{
        const name = "brand test product";
        const brand = "brand";
        expect(formatName(name, brand)).toEqual("brand test product");
    })
    it("should format the price", () => {
        let priceFormatted = formatPrice(1234.00);
        let expectedString = "R$1.234";
        expect(priceFormatted).toEqual(expectedString);
    });
})
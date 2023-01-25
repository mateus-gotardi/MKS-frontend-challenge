import { ApiResponse } from "interfaces";
import { mksAPI } from "../apiConfig";


describe('API', () => {
    
    it('should get API Products', async () => {
        const params = {
            page: 1,
            rows: 8,
            sortBy: 'id',
            orderBy: 'DESC'
        };
        const response = await mksAPI.get('/products', { params });
        expect(response).toEqual<ApiResponse>;
    })
})
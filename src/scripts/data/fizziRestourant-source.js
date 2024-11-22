import API_ENDPOINT from '../globals/api-endpoint';

class FizziRestaurantSource {
    static async listRestaurants() {
    try {
        const response = await fetch(API_ENDPOINT.LIST);
        console.log('API Response:', response); // Debug log
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const responseJson = await response.json();
        console.log('API Data:', responseJson); // Debug log
        
        return responseJson.restaurants;
    } catch (error) {
        console.error('Error in listRestaurants:', error);
        throw new Error(`Gagal mengambil daftar restaurant: ${error.message}`);
    }
}
    static async detailRestaurant(id) {
        try {
            const response = await fetch(API_ENDPOINT.DETAIL(id));
            const responseJson = await response.json();
            return responseJson.restaurant;
        } catch (error) {
            console.error('Error:', error);
            throw new Error(`Gagal mengambil detail restaurant dengan id ${id}`);
        }
    }

    static async reviewRestaurant(id) {
        try {
            const response = await fetch(API_ENDPOINT.REVIEW(id));
            const responseJson = await response.json();
            return responseJson.reviews;
        } catch (error) {
            console.error('Error:', error);
            throw new Error(`Gagal mengambil review restaurant dengan id ${id}`);
        }
    }

    static async postReview(review) {
        try {
            const response = await fetch(API_ENDPOINT.POST_REVIEW, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(review),
            });
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error('Error:', error);
            throw new Error('Gagal menambahkan review');
        }
    }

    static async favoriteRestaurant(id) {
        try {
            const response = await fetch(API_ENDPOINT.POST_FAVORITE, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error('Error:', error);
            throw new Error(`Gagal menambahkan restaurant ke favorite`);
        }
    }

    static async unfavoriteRestaurant(id) {
        try {
            const response = await fetch(API_ENDPOINT.DELETE_FAVORITE(id), {
                method: 'DELETE',
            });
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error('Error:', error);
            throw new Error(`Gagal menghapus restaurant dari favorite`);
        }
    }
}

export default FizziRestaurantSource;
interface ProductInterface {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
    isFavorite: boolean;
  }
  
  export default ProductInterface;
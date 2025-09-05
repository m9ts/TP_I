export interface Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imageURl: string;
    promo?: boolean;
    nota: number;
    estado?: 'novo' | 'usado' | 'esgotado';
}
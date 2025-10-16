const estados = ['novo', 'usado', 'esgotado'] as const;

export interface Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imageUrl: string;
    promo?: boolean;
    nota: number;
    estado?: 'novo' | 'usado' | 'esgotado';
}

export class ProdutoMapper {
    // Converte JSON da API para Produto
    static fromJson(json: any): Produto{
        let _estado = estados[Math.floor(Math.random() * estados.length)];
        return {
            id: json.id,
            nome: json.title,
            preco: json.price,
            descricao: json.description,
            imageUrl: json.image,
            promo: json.id % 5 == 0 && _estado != 'esgotado',
            estado: _estado,
            nota: 0
        };
    }

    // Converte Produto para JSON compatível com a API
    static toJson(produto: Produto): any {
        return {
            id: produto.id,
            title: produto.nome,
            price: produto.preco,
            description: produto.descricao,
            image: produto.imageUrl,
            category: 'general'
        };
    }
}
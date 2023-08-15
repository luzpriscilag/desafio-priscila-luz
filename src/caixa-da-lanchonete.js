import produtos from './produtos.json';

const itensPossiveis = ["cafe", "chantily", "suco", "sanduiche", "queijo", "salgado", "combo1", "combo2"];
const pagamentosPossiveis = ["dinheiro", "debito", "credito"];



class CaixaDaLanchonete {
    analisaCodigo(itemAtual) {
        if (itensPossiveis.includes(itemAtual)) {
            return true;
        } else {
            return false;
        }
    }

    analisaPagamento(metodoDePagamento) {
        if (pagamentosPossiveis.includes(metodoDePagamento)) {
            return true;
        } else {
            return false;
        }
    }

    listaPedido(itens) {
        pedido = [];
        for (i = 0; i < numeroItens; i++) { 
            let itemAtual = itens[i].split(',');
            pedidos.push(itemAtual);
        }
        return pedido;
    }

    verificaExtras(itens) {
        listaPedidos(itens);

    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        let total;
        let numeroItens = itens.length;
        let pedidos; 

        if (!this.analisaPagamento(metodoDePagamento)) {
            return "Forma de pagamento inválida!";
        } else if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        } else {
            let total;
            let numeroItens = itens.length;
            let pedidos = []; 


        }

    }

}

export { CaixaDaLanchonete };

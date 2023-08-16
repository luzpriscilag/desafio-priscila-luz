import produtos from './produtos.json';

const itensPossiveis = ["cafe", "chantily", "suco", "sanduiche", "queijo", "salgado", "combo1", "combo2"];
const precos = ["3.00", "1.50", "6.20", "6.50", "2.0", "7.25", "9.50", "7.50"];
const pagamentosPossiveis = ["dinheiro", "debito", "credito"];



class CaixaDaLanchonete {
    
    analisaPagamento(metodoDePagamento) {
        if (pagamentosPossiveis.includes(metodoDePagamento)) {
            return true;
        } else {
            return false;
        }
    }

    listaPedido(itens) {
        let numeroItens = itens.length;
        pedido = [];
        for (i = 0; i < numeroItens; i++) { 
            let itemAtual = itens[i].split(',');
            pedido.push(itemAtual);
        }
        return pedido;
    }

    quebraArray(itens) {
        let numeroItens = itens.length;
        let itemPorItem = [];
        for (i = 0; i < numeroItens; i++) { 
            itemPorItem.push(itens[i][0]);
            itemPorItem.push(itens[i][1]);
        }
        return itemPorItem;
    }

    verificaExtras(itens) {
        pedidoTemp = this.quebraArray(this.listaPedido(itens));
        
        if ((pedidoTemp.includes("chantily") && !pedidoTemp.includes("cafe")) || 
        (pedidoTemp.includes("queijo") && !pedidoTemp.includes("sanduiche"))) {
            return true;
        } else {
            return false;
        }
    }

    contaQuantidades(itemPorItem) {
        let quantidades = [];
        for (i = 0; i < itemPorItem.length; i++) {
            if (i % 2 == 0) {
                continue;
            } else {
                quantidades.push(parseInt(itemPorItem[i]));
            }
        }
        return quantidades;
    }

    listaApenasItens(itemPorItem) {
        let itensPedido = [];
        for (i = 0; i < itemPorItem.length; i++) {
            if (i % 2 == 0) {
                itensPedido.push(itemPorItem[i]);
            } else {
                continue;
            }
        }
        return itensPedido;
    }

    analisaCodigo(itensPedido) {
        let diferenca = itensPedido.filter(element => !itensPossiveis.includes(element));
        if (diferenca.length == 0) {
            return false;
        } else {
            return true;
        }
    }


    calcularValorDaCompra(metodoDePagamento, itens) {
        let total;
        let pedidos; 
        

         if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        } else if (!this.analisaPagamento(metodoDePagamento)) {
            return "Forma de pagamento inválida!";
        } else {
            pedidos = this.listaPedido(itens);
            let itemPorItem = this.quebraArray(pedidos);
            let quantidades = this.contaQuantidades(itemPorItem);
            let itensPedido = this.listaApenasItens(itemPorItem);  
 
            if (quantidades.includes(0)) {
                return "Quantidade inválida!";
            } else if (this.verificaExtras(itens)) {
                return "Item extra não pode ser pedido sem o principal";
            } else if (this.analisaCodigo(itensPedido)) {
                return "Item inválido!";
            } else {
                let total;
                pedidos = this.listaPedido(itens);
                itensPedido = [];
                quantidades = [];
    
                for (i = 0; i < itensPedido; i++) {
                    let itemAtual = itensPossiveis.indexOf(itensPedido[i]);
                    total =+ parseFloat(precos[itemAtual]) * quantidades[i];
    
                }
    
                if (metodoDePagamento == "dinheiro") {
                    total = total * 0.95;
                } else if (metodoDePagamento == "credito") {
                    total = total * 1.03;
                }  
                
                let numeroItens = itens.length;
                let pedidos = []; 
                totalFormatado = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                return totalFormatado; 
    
            }
    
        }
 
    }

}

export { CaixaDaLanchonete };

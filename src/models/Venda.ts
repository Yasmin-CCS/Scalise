import Produto from "./Produto";
import Usuario from "./Usuario";

interface Venda {
  id: number;
  cod: number;
  pedido: number;
  data: string;
  entrega: string;
  retira: string;
  tipoc: number;
  tipov: number;
  codc: number;
  formam: number;
  formac: number;
  formad: number;
  usuario?: Usuario | null;
  produto?: Produto | null;
}

export default Venda;
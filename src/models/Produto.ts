import Categoria from "./Categoria";

interface Produto {
  id: number;
  cod: number;
  qde: number;
  descr: string;
  bit: string;
  pv: number;
  obs: string;
  al: number;
  origem: number;
  cfop: number;
  cest: number;
  pc: number;
  bst: number;
  vst: number;
  ipi: number;
  iva: number;
  fci: string;
  categoria?: Categoria | null;
}

export default Produto;
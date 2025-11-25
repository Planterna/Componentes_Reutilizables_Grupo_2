
export class FuncionesVarias{

    asignarModal(){
       return new (window as any).bootstrap.Modal(
      document.getElementById('modalReserva')!
    );
    }


}
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type AlertType = 'primary' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'app-cuadro-alerta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cuadroAlerta.html',
})
export class CuadroAlerta {
  @Input() type: AlertType = 'primary';
  @Input() message: string = "";

  get iconId(): string {
    switch (this.type) {
      case 'success': return 'check-circle-fill';
      case 'warning':
      case 'danger': return 'exclamation-triangle-fill';
      default: return 'info-fill';
    }
  }

  get ariaLabel(): string {
    switch (this.type) {
      case 'success': return 'Success:';
      case 'warning': return 'Warning:';
      case 'danger': return 'Danger:';
      default: return 'Info:';
    }
  }

  alert=false;
  activaralerta(){
    this.alert=true;
    setTimeout(()=>(this.alert=false),2000);
  }


}

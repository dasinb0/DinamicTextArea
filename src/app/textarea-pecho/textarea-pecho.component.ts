import { Component, OnInit } from '@angular/core';
import { TextareaPechoService } from '../service/textarea-pecho.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-textarea-pecho',
  templateUrl: './textarea-pecho.component.html',
  styleUrls: ['./textarea-pecho.component.css']
})
export class TextareaPechoComponent implements OnInit {
  data: string = '';
  // newData: string = '';
  editable: boolean = false;

  constructor(private textareaPechoService: TextareaPechoService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.textareaPechoService.getDataForChansey().subscribe((chanseyResponse: any) => {
      const chanseyName = chanseyResponse.name;
      const chanseyAbilities = chanseyResponse.abilities.map((ability: any) => ability.ability.name).join(', ');
      const chanseyType = chanseyResponse.types[0].type.name;

      this.textareaPechoService.getDataForJigglyPuff().subscribe((jigglypuffResponse: any) => {
        const jigglypuffName = jigglypuffResponse.name;
        const jigglypuffAbilities = jigglypuffResponse.abilities.map((ability: any) => ability.ability.name).join(', ');
        const jigglypuffType = jigglypuffResponse.types[0].type.name;

        // Crear una cadena con los datos que deseas mostrar
        const displayData = `Nombre: ${chanseyName}\nHabilidades: ${chanseyAbilities}\nTipo: ${chanseyType}\n\nNombre: ${jigglypuffName}\nHabilidades: ${jigglypuffAbilities}\nTipo: ${jigglypuffType}`;

        
        // Asignar la cadena al textarea
        this.data = displayData;
      });
    });
  }

  generatePDF() {
    const docDefinition = {
      content: this.data,
    };

   
    const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.open();
  }

  toggleEditable() {
    this.editable = !this.editable; // Cambiar el estado de edición
  }

  // addData() {
  //   this.data += '\n' + this.newData;
  //   this.newData = '';
  // }

  // deleteData() {
  //   this.data = this.data.replace(this.newData, '');
  //   this.newData = '';
  // }
}


  



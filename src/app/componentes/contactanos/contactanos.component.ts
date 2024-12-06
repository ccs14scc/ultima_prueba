import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SolicitudFormularioService } from '../../services/solicitud-formulario/solicitud-formulario.service';
import { TecnicosDeLaEmpresaService } from '../../services/tecnicos-de-la-empresa/tecnicos-de-la-empresa.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {
  formularioForm;
  datos_formulario: any;
  tecnicos: any = []; // Asegúrate de inicializar el array de técnicos

  constructor(
    private formBuild: FormBuilder,
    private solicitudFormularioSrv: SolicitudFormularioService,
    private tecnicosDeLaEmpresaSrv: TecnicosDeLaEmpresaService 
  ) {
    this.formularioForm = this.formBuild.group({
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      mensaje: ''
    });
  }

  ngOnInit(): void {
    // Aquí no hace falta obtener técnicos si no es necesario al inicio
  }


  enviarDatos(): void {
    this.solicitudFormularioSrv.registrarFormulario(this.formularioForm.value).subscribe(
      (response: any) => {
        this.datos_formulario = response.solicitud_formulario;
        console.log(this.datos_formulario);
        alert("Datos guardados correctamente");
        this.formularioForm.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  obtenerTecnicos(): void {
    this.tecnicosDeLaEmpresaSrv.obtenerTecnicos().subscribe(
      (response: any) => {
        console.log('Técnicos obtenidos:', response);
        this.tecnicos = response.profesionales;
      },
      (error) => {
        console.error('Error al obtener técnicos:', error);
      }
    );
  }  

}




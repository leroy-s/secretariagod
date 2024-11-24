import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-administrar-documentos',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, AvatarModule, DropdownModule],
  templateUrl: './administrar-documentos.component.html',
  styleUrl: './administrar-documentos.component.css'
})
export class AdministrarDocumentosComponent {
  
  showList = false;
  selectedItem: any = null; // Variable para almacenar el ítem seleccionado

  years: { label: string; value: string }[] = [
    { label: '2023', value: '2023' },
    { label: '2024', value: '2024' },
    { label: '2025', value: '2025' },
  ]; // Opciones para el dropdown

  selectedYear: string = '2024'; // Año seleccionado por defecto

  documentTypes = [
    { label: 'PDF', value: 'pdf' },
    { label: 'DOCX', value: 'docx' },
    { label: 'Excel', value: 'xlsx' }
  ];
  selectedDocumentType: string | null = null;

  onBack(): void {
    this.showList = false;
    this.selectedItem = null; // Reinicia la selección al regresar
    console.log('Regresando...');
  }
}

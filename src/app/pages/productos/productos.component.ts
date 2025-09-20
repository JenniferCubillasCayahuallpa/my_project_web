import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: string;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Chifles',
      descripcion: 'Crujientes y deliciosos chifles hechos con plátanos verdes seleccionados.',
      precio: 3.50,
      imagen: '🥨',
      categoria: 'Salado'
    },
    {
      id: 2,
      nombre: 'Alfajores',
      descripcion: 'Deliciosos alfajores rellenos de dulce de leche y cubiertos de chocolate.',
      precio: 2.00,
      imagen: '🍪',
      categoria: 'Galletas'
    },
    {
      id: 3,
      nombre: 'Helados',
      descripcion: 'Ideal para comenzar con todas las funcionalidades esenciales.',
      precio: 2.50,
      imagen: '🍦',
      categoria: 'Postres'
    },
    {
      id: 4,
      nombre: 'Mil hojas',
      descripcion: 'Deliciosas capas de masa crujiente con crema pastelera.',
      precio: 199.99,
      imagen: '🍰',
      categoria: 'Pasteles'
    },
    {
      id: 5,
      nombre: 'Chocotejas',
      descripcion: 'Acceso desde cualquier lugar con máxima seguridad y disponibilidad.',
      precio: 149.99,
      imagen: '🍫',
      categoria: 'Chocolates'
    },
    {
      id: 6,
      nombre: 'Canchitas',
      descripcion: 'Todo lo que necesitas en un solo paquete con descuento especial.',
      precio: 799.99,
      imagen: '🍿',
      categoria: 'Salado'
    }
  ];

  categorias = ['Todos', 'Salado', 'Chocolates', 'Postres', 'Galletas', 'Pasteles'];
  categoriaSeleccionada = 'Todos';

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateTitle('Productos - Mi Negocio | Catálogo completo de productos y servicios');
    this.seoService.updateMetaTags(
      'Explora nuestro catálogo completo de productos y servicios. Desde deliciosos chifles hasta exquisitos alfajores.',
      'Productos, Catálogo, Servicios, Chifles, Alfajores, Helados, Mil hojas, Chocotejas, Canchitas',
      'https://minegocio.com/assets/og-productos.jpg'
    );
    this.seoService.updateCanonicalUrl('https://minegocio.com/productos');
  }

  filtrarProductos(): Producto[] {
    if (this.categoriaSeleccionada === 'Todos') {
      return this.productos;
    }
    return this.productos.filter(producto => producto.categoria === this.categoriaSeleccionada);
  }

  seleccionarCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
  }

}

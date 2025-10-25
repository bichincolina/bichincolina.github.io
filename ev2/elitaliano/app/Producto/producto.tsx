"use client";

import React from "react";
import type { Producto } from "./products";
import { addToCart } from "../cartUtils"; // ← cambia lib→ cartUtils por tu estructura actual

interface Props { products: Producto[]; }

const Producto: React.FC<Props> = ({ products }) => {
  return (
    <>
      <div className="container mt-4">
        <div id="listaProductos" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {products.map((p) => (
            <div className="col" key={p.id}>
              <div id="producto" className="card h-100 shadow-sm">
                <img src={p.imagen.startsWith("/") ? p.imagen : `/${p.imagen}`} className="card-img-top" alt={p.nombre} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{p.nombre}</h5>
                  <p className="card-text mb-1">{p.descripcion}</p>
                  <p className="card-text fw-bold mb-3">
                    {new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(p.precio)}
                  </p>
                  <button
                    id="agregarCarro"
                    className="btn btn-dark w-100 mt-auto"
                    onClick={() =>
                      addToCart({
                        id: p.id,
                        nombre: p.nombre,
                        precio: p.precio,
                        imagen: p.imagen.startsWith("/") ? p.imagen : `/${p.imagen}`,
                        descripcion: p.descripcion,
                        qty: 1,
                      })
                    }
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mantengo tus IDs del tab/carrito para compatibilidad visual */}
      <div className="carroTab">
        <h1>Carrito</h1>
        <div className="listaCarro"><div className="producto"></div></div>
        <div id="precioTotal" className="totalPrice p-3 mt-4 rounded shadow-sm"><h5 className="m-0">Precio total: $0</h5></div>
        <div className="btn">
          <button className="cerrar">CERRAR</button>
          <button className="checkOut">CHECKOUT</button>
        </div>
      </div>

      <footer className="py-4 text-center text-white" style={{ backgroundColor: "rgba(44,62,80,0.95)" }}>
        <p className="mb-0">&copy; 2025 El Italiano - Todos los derechos reservados</p>
      </footer>
    </>
  );
};
export default Producto;

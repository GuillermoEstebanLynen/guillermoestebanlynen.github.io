class Grafo {
    constructor() {
      this.adjList = new Map();  // Mapa para almacenar la lista de adyacencia
    }
  
    // Agregar un nuevo nodo (vértice) al grafo
    addNodo(nodo) {
      // Cada nodo tendrá una lista vacía para guardar sus conexiones
      this.adjList.set(nodo, []);
    }
  
    // Agregar una arista entre dos nodos
    addArista(nodo1, nodo2) {
      // Conectar nodo1 a nodo2
      this.adjList.get(nodo1).push(nodo2);
      // Si el grafo es no dirigido, también conectar nodo2 a nodo1
      this.adjList.get(nodo2).push(nodo1);
    }
  
    // Mostrar el grafo
    imprimirGrafo() {
      for (let [nodo, adyacentes] of this.adjList.entries()) {
        console.log(`${nodo} -> ${adyacentes.join(', ')}`);
      }
    }
  }
  
  // Crear el grafo
  const g = new Grafo();
  
  // Agregar nodos
  g.addNodo('A');
  g.addNodo('B');
  g.addNodo('C');
  g.addNodo('D');
  
  // Agregar aristas
  g.addArista('A', 'B');
  g.addArista('A', 'C');
  g.addArista('B', 'D');
  g.addArista('C', 'D');
  
  // Mostrar el grafo
  g.imprimirGrafo();
  
// Definição do número de vértices
const colors = ['blue', 'red', 'green'];
const numVertices = 7;
const connections = [
  { vertex: 'A', neighbors: [1], color: "grey" },
  { vertex: 'B', neighbors: [0, 2, 4], color: "grey" },
  { vertex: 'C', neighbors: [1, 3, 4], color: "grey" },
  { vertex: 'D', neighbors: [2], color: "grey" },
  { vertex: 'E', neighbors: [1, 2, 5, 6], color: "grey" },
  { vertex: 'F', neighbors: [5, 6], color: "grey" },
  { vertex: 'G', neighbors: [4, 5], color: "grey" }
];

// Definição das posições dos vértices
const vertexPositions = [
  { x: 100, y: 100 },
  { x: 200, y: 100 },
  { x: 400, y: 100 },
  { x: 500, y: 100 },
  { x: 300, y: 200 },
  { x: 200, y: 300 },
  { x: 400, y: 300 }
];

// Função para criar e posicionar os vértices na tela
function createVertices() {
  const graphContainer = document.getElementById('graph-container');

  for (let i = 0; i < numVertices; i++) {
    var letter = String.fromCharCode(65 + i);
    const colorOptions = colors.slice();
    const vertex = document.createElement('div');
    vertex.setAttribute("id", letter);
    vertex.className = 'vertex';
    vertex.textContent = letter; // Converte o índice para o caractere correspondente (A, B, C, ...)
    
    // Obtém as coordenadas do vértice na lista de posições
    const position = vertexPositions[i];

    vertex.style.left = position.x + 'px';
    vertex.style.top = position.y + 'px';
    
    for (let j = 0; j < connections[i].neighbors.length; j++) {
      var index = connections[i].neighbors[j];
      if(i > index){
        var neighborGraph = index;
        var neighborColor = connections[neighborGraph].color;
        for (let k = 0; k < colorOptions.length; k++) {
          if(colorOptions[k] == neighborColor){
            colorOptions.splice(k, 1);
          }
        }
      }
    }
    
    if(i == 0){
      connections[i].color = "blue";
      vertex.style.backgroundColor = connections[i].color;
    } else {
      connections[i].color = colorOptions[0];
      vertex.style.backgroundColor = connections[i].color;
    }
    graphContainer.appendChild(vertex);
  }
}

// Chamada da função para criar os vértices
createVertices();

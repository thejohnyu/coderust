class vertex_mst {
  constructor(id, visited) {
    this.id = id;
    this.visited = visited;
  }
}

class edge_mst {
  constructor(weight, visited, src, dest) {
    this.weight = weight;
    this.visited = visited;
    this.src = src;
    this.dest = dest;
  }
}

class graph_mst {
  constructor(g, e) {
    this.g = g;
    this.e = e;
  }

  // This method returns the vertex with a given id if it
  // already exists in the graph, returns NULL otherwise
  vertex_exists(id) {
    for (let i = 0; i < this.g.length; i++) {
      if (this.g[i].id === id) {
        return this.g[i];
      }
    }
    return null;
  }
  // This method generates the graph with v vertices
  // and e edges
  generate_graph(vertices, edges) {
    // create vertices
    for (let i = 0; i < vertices; i++) {
      let v = new vertex_mst(i + 1, false);
      this.g.push(v);
    }

    // create edges
    for (let i = 0; i < edges.length; i++) {
      let src = this.vertex_exists(edges[i][1]);
      let dest = this.vertex_exists(edges[i][2]);
      let e = new edge_mst(edges[i][0], false, src, dest);
      this.e.push(e);
    }
  }
  // This method finds the MST of a graph using
  // Prim's Algorithm
  // returns the weight of the MST
  find_min_spanning_tree() {
    let vertex_count = 0;
    let weight = 0;

    // Add first vertex to the MST
    let current = this.g[0];
    current.visited = true;
    vertex_count++;

    // Construct the remaining MST using the
    // smallest weight edge
    while (vertex_count < this.g.length) {
      let smallest = null;

      for (let i = 0; i < this.e.length; i++) {
        if (this.e[i].visited === false) {
          if (
            this.e[i].src.visited === true &&
            this.e[i].dest.visited === false
          ) {
            if (smallest == null || this.e[i].weight < smallest.weight) {
              smallest = this.e[i];
            }
          }
        }
      }

      smallest.visited = true;
      smallest.dest.visited = true;
      weight += smallest.weight;
      vertex_count++;
    }
    return weight;
  }

  print_graph() {
    for (let i = 0; i < this.g.length; i++) {
      console.log(this.g[i].id + " " + this.g[i].visited);
    }

    for (let i = 0; i < this.e.length; i++) {
      console.log(
        this.e[i].src.id +
          "->" +
          this.e[i].dest.id +
          "[" +
          this.e[i].weight +
          ", " +
          this.e[i].visited +
          "]  "
      );
    }
  }

  print_mst(w) {
    console.log("MST");
    for (let i = 0; i < this.e.length; i++) {
      if (this.e[i].visited === true) {
        console.log(this.e[i].src.id + "->" + this.e[i].dest.id);
      }
    }
    console.log("weight: " + w);
  }
}

console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Min Spanning Tree");
console.log("---------------------------------------");

let gr = [];
let ed = [];
let g = new graph_mst(gr, ed);
let v = 5;
let e = [
  [1, 1, 2],
  [1, 1, 3],
  [2, 2, 3],
  [3, 2, 4],
  [3, 3, 5],
  [2, 4, 5]
];

g.generate_graph(v, e);
console.log("Testing graph 1...");
g.print_graph();
let w = g.find_min_spanning_tree();
g.print_mst(w);

gr = [];
ed = [];
g = new graph_mst(gr, ed);
v = 7;
e = [
  [2, 1, 4],
  [1, 1, 3],
  [2, 1, 2],
  [1, 3, 4],
  [3, 2, 4],
  [2, 3, 5],
  [2, 4, 7],
  [1, 5, 6],
  [2, 5, 7]
];

g.generate_graph(v, e);
console.log("Testing graph 2...");
g.print_graph();
w = g.find_min_spanning_tree();
g.print_mst(w);
console.log("++++++ Test Done Successfully ++++++");

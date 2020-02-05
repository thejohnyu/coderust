class Node_clone {
    constructor(d) {
      this.data = d;
      this.neighbors = [];
    }
  }
  
  let clone_rec = function(root, nodes_completed) {
    if (!root) {
      return null;
    }
  
    let pNew = new Node_clone(root.data);
    nodes_completed[root.data] = pNew;
  
    for (let p in root.neighbors) {
      let x = nodes_completed[root.neighbors[p].data];
      if (!x) {
        pNew.neighbors.push(clone_rec(root.neighbors[p], nodes_completed));
      } else {
        pNew.neighbors.push(x);
      }
    }
  
    return pNew;
  };
  
  
  // this is un-directed graph i.e.
  // if there is an edge from x to y
  // that means there must be an edge from y to x
  // and there is no edge from a node to itself
  // hence there can maximim of (nodes * nodes - nodes) / 2 edgesin this graph
  let create_test_graph_undirected = function(nodes_count, edges_count) {
    let vertices = [];
    for (let i = 0; i < nodes_count; i++) {
      vertices.push(new Node_clone(i));
    }
  
    let all_edges = [];
    for (let i = 0; i < nodes_count; i++) {
      for (let j = i + 1; j < nodes_count; j++) {
        all_edges.push([i, j]);
      }
    }
  
  
    // define in utils/common.js
    all_edges = shuffle(all_edges);
  
    for (let i = 0; i < Math.min(edges_count, all_edges.length); i++) {
      let edge = all_edges[i];
      vertices[edge[0]].neighbors.push(vertices[edge[1]]);
      vertices[edge[1]].neighbors.push(vertices[edge[0]]);
    }
  
    return vertices;
  };
  
  let print_graph = function(vertices) {
    for (let n in vertices) {
      console.log(n.data + ": {");
      for (let t in n.neighbors) {
        console.log(t.data + " ");
      }
    }
  };
  
  let print_graph_rec = function(root, visited_nodes) {
    if (!root || visited_nodes.has(root)) {
      return;
    }
  
    visited_nodes.add(root);
    let data_string = '';
    data_string += root.data + ": {";
  
    for (let n in root.neighbors) {
      data_string += root.neighbors[n].data + " ";
    }
    console.log(data_string + "}");
  
    for (let n in root.neighbors) {
      print_graph_rec(root.neighbors[n], visited_nodes);
    }
  };
  
  let print_graph_clone = function(root) {
    let visited_nodes = new Set();
    print_graph_rec(root, visited_nodes);
  };
  
  
  let clone = function(root) {
    let nodes_completed = {};
    return clone_rec(root, nodes_completed);
  };
  
  console.log("");
  console.log("+++++++++++++++++++++++++++++++++++++++");
  console.log("Clone Graph");
  console.log("---------------------------------------");
  let vertices = create_test_graph_undirected(7, 18);
  print_graph_clone(vertices[0]);
  let cp = clone(vertices[0]);
  console.log("");
  console.log("After copy.");
  print_graph_clone(cp);
  console.log("++++++ Test Done Successfully ++++++");
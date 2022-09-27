
const star = '*';
const spaceLine = '_';
const hashtag = '#';

function drawTreeBase(height){
  const maxTreeLength = height * 2 - 1;
  const treeBase = Array(maxTreeLength).fill(spaceLine);
  treeBase[Math.floor(maxTreeLength / 2)] = hashtag;

  return treeBase;
}

function drawTree (height){
  const tree = []
  const maxTreeLength = height * 2 - 1;
  let iterator =  Math.floor(maxTreeLength / 2);

  for (let i = 0; i < height; i++) {
    tree.push(Array(maxTreeLength).fill(star));
  }
  
  tree.forEach((line)=>{
    let outerLeft = 0;
    let outerRight = line.length - 1;
    
    for (let i = 0; i < iterator; i++) {
      line[outerLeft] = spaceLine;
      line[outerRight] = spaceLine;  
      outerLeft++;
      outerRight--;    
    }    
    
    iterator--;
    
    return line;
  })

  return tree;
}

function showTree(height){
  const tree = drawTree(height)
  const base = drawTreeBase(height);

  tree.push(base);
  tree.push(base);

  tree.forEach((line)=>{
    console.log(line.join(''))
  });
}

showTree(15)
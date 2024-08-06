document.getElementById('btn').addEventListener('click', function() {
  
  const name = document.getElementById('name').value;
  const result = document.getElementById('result');
  
  if (name) {
    const khodam = isi(name);
    result.innerHTML = 'Khodam anda adalah <strong>' + khodam +'</strong>';
  } else {
    result.innerHTML = '<span style="color: red;">silahkan masukkan nama anda!!!</span>';
  }
  
});

function isi(name) {
  const khodams = ['monyet terbang', 'biji burung', 'memek terbang', 'borgol hansip', 'peler bengkak', 'sarung gajah', 'kunti bagong', 'oboy', 'upin', 'ipin', 'ahtong', 'buaya kali', 'adudu', 'daun kelor', 'kancang panjang', 'singa laut', 'ambatukam', 'abah anis', 'ganjar', 'angin kentut', 'kacang rebus', 'bawang goreng', 'uncle muthu', 'jarjit'];
  const index = Math.floor(Math.random() * khodams.length);
  return khodams[index];
}
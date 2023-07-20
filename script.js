function goster() {
  const onizlemeAlanı = document.getElementById("kayitlinotlar");
  const metinkutusu = document.getElementById("not").value;
  const girdiMetni = metinkutusu.value;
  const maxkarakter = 30;
  let onizlememetni = girdiMetni;
  if(girdiMetni.length > maxkarakter){
    onizlememetni = girdiMetni.substring(0,maxkarakter) + "...";
  }
  onizlemeAlanı.textContent = onizlememetni;

}

function yenikayit() {
  var baslik = document.getElementById("yeniBaslik").value;
  var tarih = document.getElementById("yenitarih").value;
  var not = document.getElementById("yeninot").value;

  var notlar = document.getElementById("kayitlinotlar-list");
  var li = document.createElement("li");

  li.innerHTML = `
    <div class = "notlar">
          <div class="baslik" style="float: left;">
              <label for="baslik" style="float: left; font: bold;">Başlık:</label>
              <div class="baslik-text" style="display: flex; float: left; margin-right: 150px;">${baslik}</div>
          </div>
          <div class="tarih" style="float: right;">
              <label for="tarih" style="float: left; font: bold;">Tarih:</label> 
              <div class="tarih-text" style="float: right; display: flex;">${tarih}</div>
          </div>      <br>  <br> 
                        
    
      
          <div class="not" style="float: left;">
              <label for="not" style="float: left; font: bold;">Not:</label>
              <div class="not-text" style="display: flex;">${not}</div>
          </div>
    </div>
          <div class="sil" style="float: right;">
              <button onclick="sil(this)">Sil</button>
    

  `;

  notlar.appendChild(li);

  // Yeni not oluşturulduktan sonra giriş alanlarını temizleyin
  document.getElementById("yeniBaslik").value = "";
  document.getElementById("yenitarih").value = "";
  document.getElementById("yeninot").value = "";

  goster();
}

function sil(silButton) {
  var notDiv = silButton.parentNode.parentNode;
  notDiv.parentNode.removeChild(notDiv);
}

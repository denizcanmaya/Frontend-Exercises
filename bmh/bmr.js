document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engellemek amaçlı!
    
    let age = document.getElementById("ageinput").value; // Yaş girdisini alabilmek için!
    let gender = document.querySelector('input[name="inlineRadioOptions"]:checked').value; // Cinsiyette seçimin yapılabilmesi
    let height = document.getElementById("heightinput").value;
    let weight = document.getElementById("weightinput").value;
    
    let bmr;
    
    // Karar Ağacı Yapısı Erkek seçilirse bu formül, kadın seçilirse bu!
    if (gender === "Male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "Female") {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    
    // Sonucun id'si belirli olan dive aktarılması!!
    let resultDiv = document.getElementById('bmrSonuc');
    resultDiv.innerText = `Bazal Metabolik Hız: ${bmr.toFixed(2)} kcal/gün`;
  });
  
// 1. Maaşı 5000'in üzerinde olan ailelerin listesi. Listede 

import { families } from "./families";

// aile babasının ad ve soyadları ad ve soyad sırasına göre yer almalıdır.
const salaryOver5000 = (newFamilie) => {
   return newFamilie.filter((families)=> families.salary>5000).sort((a,b)=>a.firstname-b.firstname);
 
}





//2. Toplam erkek çocuk sayısı. Çocukların listesi isme göre (az) listelenmelidir.
const theTotalnumberOfboysToAZ = () =>{}




//3. Toplam kız sayısı. Çocukların listesi isme göre (az) listelenmelidir.
const theTotalnumberOfgirlsToAZ = () =>{}



//4. 8 yaşından küçük çocukların sayısı. Çocuklar en büyükten en küçüğe doğru sıralanmalıdır.
const numberOfChildrenUnder8yearsOld = () =>{}




//5. 8 yaşından büyük çocukların annelerinin isimleri isim sırasına göre yazılmalıdır.
function namesOfmothersOfchildrenOver8yearsold(over8Yearsold) {
    const newover8Yearsold = over8Yearsold.filter((child) => child.age > 8 && families.partner.sort())
    return newover8Yearsold
}




export {   salaryOver5000,
    theTotalnumberOfboysToAZ, 
    theTotalnumberOfgirlsToAZ,
    numberOfChildrenUnder8yearsOld,
namesOfmothersOfchildrenOver8yearsold
}
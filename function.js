import { families } from "./families";
// 1. Maaşı 5000'in üzerinde olan ailelerin listesi. Listede 
// aile babasının ad ve soyadları ad ve soyad sırasına göre yer almalıdır.

export const salaryOver5000 = (newFamilie) => {
    return newFamilie.filter((families)=> families.salary>5000)
                      .map((x) => x.firstname + " " +  x.lastname  + " " + x.salary)
                      .sort()
}






//2. Toplam erkek çocuk sayısı. Çocukların listesi isme göre (az) listelenmelidir.

//3. Toplam kız sayısı. Çocukların listesi isme göre (az) listelenmelidir.
export const totalNumberOfChildren = (pFamilie, gender) => {
    const list = pFamilie.map((family) => {
        return family.childrens.filter((child) => child.gender == gender)
     }).flatMap(x => x).map((x) => x.name)
        .sort()

     return list + " list length " + list.length

}







//4. 8 yaşından küçük çocukların sayısı. Çocuklar en büyükten en küçüğe doğru sıralanmalıdır.
export const numberOfChildrenUnder8yearsOld = () =>{}




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
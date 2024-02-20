// return number of vowels in a string.

function countVowels(str1)
{
    str1.toLowerCase();
    for(const char of str1)
    {
        if(char == 'a' || char== "e" || char== "i" || char== "o"|| char== "u" )
        {
       counter++;
        }
    }

    return counter
}
let counter=0;
ans = countVowels("aepli")
console.log("The count of Vowels is ",ans)
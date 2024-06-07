function changeImage() {
    const img = document. getElementById ('myImage');
    const currentSrc = img. getAttribute ("src")

    if (currentSrc === 'img/images.jfif')
        {img.setAttribute("src", "img/images2.jfif");
        img.setAttribute("alt", "images2");
        }

        else {
            img.setAttribute("src", "img/images.jfif");
            img.setAttribute("alt", "images");
        }
}











function ChangeImage() {
    const img = document. getElementById ('MyImage');
    const currentSrc = img. getAttribute ("src");

    if (currentSrc === 'img/img1.jfif')
    {img.setAttribute("src", "img/img2.jfif");
        img.setAttribute("alt", "img01");
    }

    else {
        img.setAttribute("src", "img/img1.jfif");
        img.setAttribute("alt", "img01")
    }
  
}


    function ChangeImages() {
        const img = document. getElementById ('MyImages');
        const currentSrc = img. getAttribute ("src");

        if (currentSrc === 'img/imag.jfif')
            {img.setAttribute("src", "img/imag2.jfif");
                img.setAttribute("alt", "imag01");
            }

            else{ 
                img.setAttribute("src", "img/imag.jfif");
                img.setAttribute("alt", "imag01")
            }

    }
<script>
    import Navbar from "../components/Navbar.svelte";
</script>

<svelte:head>
    <title>The Guitar</title>
</svelte:head>

<template>
    <Navbar/>
    <div id="bg">
        <div id="content">
            <h1>the Electric Guitar</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores vero error quas, dolore sequi dolor explicabo minus quasi consequuntur esse rerum, repellendus tempore eaque voluptatum ea quo quos. Porro cumque vitae, autem doloremque sed expedita voluptatem eveniet, eaque quod culpa quas blanditiis rem fugit dolores facere placeat ex laborum nobis sint necessitatibus reiciendis sit? Sit fugiat nulla, ducimus tempora delectus, corporis voluptatum temporibus esse vero enim quas. Dolore delectus, quasi mollitia neque labore cumque est placeat aliquid aliquam, distinctio deleniti nemo fugiat molestias optio odio! Molestias placeat, dolore nam eaque quam earum magnam fugit perferendis iusto harum, repellendus minima iste quisquam? Nesciunt incidunt amet distinctio quam laboriosam! Beatae obcaecati debitis, harum id assumenda eligendi. Similique esse pariatur alias consectetur dolore ex, quod ipsam corrupti quam necessitatibus accusantium tenetur enim in eligendi magni! Delectus impedit aliquam esse eius ipsam neque fuga blanditiis dolore fugit, deleniti beatae sequi debitis pariatur tempore corrupti tempora nemo dolores alias illo cumque recusandae laborum architecto! Dicta, sed consequuntur at nostrum ipsum, facere nisi repellendus provident assumenda ducimus itaque expedita culpa quod ea dolor, cupiditate quidem labore eveniet veritatis mollitia laborum harum eos fuga rem. Saepe fuga id soluta nemo vero! Ullam rerum a optio labore iste!</p>
            <div id="attrib">Photo by <a target="_blank" rel="noopener" class="link-attrib" href="https://unsplash.com/@adro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alejandro Morelos</a> on <a target="_blank" rel="noopener" class="link-attrib" href="https://unsplash.com/s/photos/electric-guitar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
  
        </div>
    </div>
</template>

<style lang="scss">
    #bg {
        background-image: url("/assets/images/guitar-bg.webp");
        background-size: cover;
        background-position: center center;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
    }
    #content {
        color: #fff;
        font-family: Rawk Brush;
        width: 60vw;
        backdrop-filter: blur(0.2em);
        margin-top: 3em;
        h1 {
            text-align: center;
        }
        p {
            font-size: 1.5em;
        }
    }
    #attrib {
        text-align: center;
        margin-bottom: 2em;
    }
    .link-attrib {
        color: #fff;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }

</style>
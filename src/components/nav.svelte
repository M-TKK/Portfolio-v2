<script>
    import { onMount } from "svelte";

    // show mobile icon and display menu
    let showMobileMenu = false;

    // Mobile menu click event
    const handleMobileClick = () => (showMobileMenu = !showMobileMenu);

    // Media match query handler
    const mediaQueryHandler = e => {
        if(!e.matches){
            showMobileMenu = false;
        }
    }


</script>

<nav class="w-full flex font-futura uppercase text-lg font-bold items-center xs:p-8 lg:py-12">

    <div class="flex-1 relative z-20">
        <a href="/">Mitch Boumelhem.</a>
    </div>

    <div class={`navbar-list${showMobileMenu ? 'mobile' : ''}`}>
        <a href="/projects" on:click={handleMobileClick}>Projects</a>
        <a href="https://www.dropbox.com/s/3anw9ff7pnp8856/Mitchell_Boumelhem_Resume.pdf?raw=1" target="_blank">resume</a>
    </div>
    
    <div class="text-right flex gap-4 justify-end">
        <button class="font-bold text-[1.5em] z-30" on:click={handleMobileClick} id="mobile-btn"><i class="bi bi-list"></i></button>
    </div>
</nav>

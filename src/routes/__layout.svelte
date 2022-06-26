<script>
    import '../tailwind.css'
    import '../app.css';
    import Nav from '../components/nav.svelte';
    

</script>


<div class="bg-[#fbf7f5]">
   <div class="h-full lg:w-[90%] m-auto">
        <Nav/>
        <slot></slot>
   </div>
</div>




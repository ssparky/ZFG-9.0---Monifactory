ServerEvents.recipes((event) => {
    // Alternate quantum flux recipes
    event.shaped('2x kubejs:quantum_flux', [
        ' A ',
        'ABA',
        ' A '
    ],
    {
        A: 'ars_nouveau:source_gem',
        B: 'gtceu:energy_crystal'
    }).id('kubejs:quantum_flux_6')
})
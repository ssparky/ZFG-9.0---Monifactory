ServerEvents.recipes(event => {
    // AE2Things Regular
    // AE2Things Disk Housing
    event.remove({id: 'ae2things:cells/disk_housing'})
    event.shaped('ae2things:disk_housing', [
        'ABA',
        'B B',
        'ABA'
    ],
    {
        A: '#forge:fine_wires/black_steel',
        B: '#forge:plates/nichrome'
    }).id('kubejs:ae2things/disk_housing')

    // AE2Things Item disks - remove raw crafts, leave only the disk + component recipes
    event.remove({id: 'ae2things:cells/disk_drive_1k'})
    event.remove({id: 'ae2things:cells/disk_drive_4k'})
    event.remove({id: 'ae2things:cells/disk_drive_16k'})
    event.remove({id: 'ae2things:cells/disk_drive_64k'})
    event.remove({id: 'ae2things:cells/disk_drive_256k'})

    // AE2 MEGA Things
    // AE2Things Item Disk Housing
    event.remove({id: 'ae2_mega_things:mega_item_disk_housing'})
    event.shaped('ae2_mega_things:mega_item_disk_housing', [
        'ABA',
        'C C',
        'ABA'
    ],
    {
        A: '#forge:fine_wires/yttrium_barium_cuprate',
        B: '#forge:plates/niobium_nitride',
        C: '#forge:plates/naquadah'
    }).id('kubejs:ae2_mega_things/mega_item_disk_housing')

    // Same for the MEGA disks
    event.remove({id: 'ae2_mega_things:item_disk_drive_1m'})
    event.remove({id: 'ae2_mega_things:item_disk_drive_4m'})
    event.remove({id: 'ae2_mega_things:item_disk_drive_16m'})
    event.remove({id: 'ae2_mega_things:item_disk_drive_64m'})
    event.remove({id: 'ae2_mega_things:item_disk_drive_256m'})

    // AE2Things Fluid Disk Housing
    event.remove({id: 'ae2_mega_things:fluid_disk_housing'})
    event.shaped('ae2_mega_things:fluid_disk_housing', [
        'ABA',
        'B B',
        'ABA'
    ],
    {
        A: '#forge:fine_wires/black_steel',
        B: '#forge:plates/signalum'
    }).id('kubejs:ae2things/fluid_disk_housing')

    // Same for the MEGA fluid disks
    event.remove({id: 'ae2_mega_things:fluid_disk_drive_1k'})
    event.remove({id: 'ae2_mega_things:fluid_disk_drive_4k'})
    event.remove({id: 'ae2_mega_things:fluid_disk_drive_16k'})
    event.remove({id: 'ae2_mega_things:fluid_disk_drive_64k'})
    event.remove({id: 'ae2_mega_things:fluid_disk_drive_256k'})

    //AE2Things MEGA Fluid Disk Housing
    event.remove({id: 'ae2_mega_things:mega_fluid_disk_housing'})
    event.shaped('ae2_mega_things:mega_fluid_disk_housing', [
        'ABA',
        'C C',
        'ABA'
    ],
    {
        A: '#forge:fine_wires/yttrium_barium_cuprate',
        B: '#forge:plates/enori_empowered',
        C: '#forge:plates/crystal_matrix'
    }).id('kubejs:ae2things/mega_fluid_disk_housing')

    // Same for the MEGA fluid disks
    event.remove({id: 'ae2_mega_things:mega_fluid_disk_drive_1m'})
    event.remove({id: 'ae2_mega_things:mega_fluid_disk_drive_4m'})
    event.remove({id: 'ae2_mega_things:mega_fluid_disk_drive_16m'})
    event.remove({id: 'ae2_mega_things:mega_fluid_disk_drive_64m'})
    event.remove({id: 'ae2_mega_things:mega_fluid_disk_drive_256m'})

    // MEGA source cells
    event.remove({id: 'arseng:mega_source_cell_housing'})
    event.shaped('megacells:mega_source_cell_housing', [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        A: 'ars_nouveau:source_gem_block',
        B: 'ars_nouveau:manipulation_essence',
        C: 'megacells:mega_item_cell_housing'
    }).id('kubejs:arseng/mega_source_cell_housing');
    event.shapeless('megacells:source_storage_cell_1m', ['megacells:mega_source_cell_housing', 'megacells:cell_component_1m']);
    event.shapeless('megacells:source_storage_cell_4m', ['megacells:mega_source_cell_housing', 'megacells:cell_component_4m']);
    event.shapeless('megacells:source_storage_cell_16m', ['megacells:mega_source_cell_housing', 'megacells:cell_component_16m']);
    event.shapeless('megacells:source_storage_cell_64m', ['megacells:mega_source_cell_housing', 'megacells:cell_component_64m']);
    event.shapeless('megacells:source_storage_cell_256m', ['megacells:mega_source_cell_housing', 'megacells:cell_component_256m']);
})
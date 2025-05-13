const $ShearsItem = Java.loadClass('net.minecraft.world.item.ShearsItem')
const $ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')
StartupEvents.registry('item', item => {
  item.createCustom('wooden_shears',() => new $ShearsItem(new $ItemProperties().defaultDurability(8)))
})
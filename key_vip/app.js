/*
 * Cafe Bunny Universal Add-on Editor Pro v3.2
 * © 2026 Nuttsumechan. All Rights Reserved.
 * โค้ดการทำงานหลักของระบบ (Main Application Logic)
 * หมายเหตุ: รูปแบบไฟล์ JSON ต้องเป็นไปตามมาตรฐานของ Minecraft และห้ามใส่คอมเมนต์ในบรรทัดแรกของไฟล์ JSON
 */

let itemCount = 0;

// ข้อความแจ้งเตือนประกาศลิขสิทธิ์สำหรับแสดงบนหน้าต่างระบบ (รองรับทั้งภาษาไทยและภาษาอังกฤษ)
const copyrightText = `// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//        COPYRIGHT NOTICE / ประกาศลิขสิทธิ์
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// © 2026 Nuttsumechan. All Rights Reserved.
//
// [TH] ห้ามมิให้ทำซ้ำ คัดลอก ดัดแปลง แก้ไข หรือเผยแพร่ผลงานนี้
// โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษรจากเจ้าของลิขสิทธิ์
// การฝ่าฝืนจะถูกดำเนินคดีตามพระราชบัญญัติลิขสิทธิ์ พ.ศ. 2537 ถึงที่สุด
//
// [EN] Unauthorized copying, modification, reproduction, distribution,
// or redistribution, in whole or in part, is strictly prohibited 
// without prior written consent from the copyright holder.`;

document.getElementById('modalText').innerText = copyrightText;

// ฟังก์ชันสำหรับสร้างข้อความคอมเมนต์ลิขสิทธิ์เพื่อฝังลงในหัวไฟล์ JSON หรือไฟล์ภาษา (.lang)
function getInjectCopyrightComment(isLangFile = false) {
    const symbol = isLangFile ? "##" : "//";
    return `${symbol} ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
           `${symbol} 🔒 COPYRIGHT NOTICE / ประกาศลิขสิทธิ์\n` +
           `${symbol} © 2026 Nuttsumechan. All Rights Reserved.\n` +
           `${symbol} [TH] สงวนลิขสิทธิ์ ห้ามคัดลอก ดัดแปลง หรือแก้ไขสคริปต์ในไฟล์นี้ทุกกรณี\n` +
           `${symbol} [EN] Strictly prohibited from copying or modifying scripts in this file.\n` +
           `${symbol} ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
}

// ฟังก์ชันแปลงออบเจกต์เป็น JSON String 
function stringifyJsonWithCopyright(jsonObject) {
    // ข้อสังเกต: ไฟล์ JSON ของ Minecraft จะต้องขึ้นต้นด้วยเครื่องหมาย { หรือ [ เท่านั้น ห้ามใส่คอมเมนต์นำหน้า
    return JSON.stringify(jsonObject, null, 2);
}

function openCopyrightModal() {
    const rows = document.querySelectorAll('#itemTableBody tr');
    if (rows.length === 0) return alert("กรุณาเพิ่มรายการไอเทมในตารางอย่างน้อย 1 รายการก่อนดำเนินการต่อ");
    document.getElementById('agreeCheckbox').checked = false;
    document.getElementById('confirmDownloadBtn').disabled = true;
    document.getElementById('copyrightModal').style.display = 'flex';
}

function closeCopyrightModal() {
    document.getElementById('copyrightModal').style.display = 'none';
}

function toggleDownloadBtn(checkbox) {
    document.getElementById('confirmDownloadBtn').disabled = !checkbox.checked;
}

// ใช้โมเดลพื้นฐานรูปแบบเดียวกันทั้งหมด (Head Only) 
// คงฟังก์ชันนี้ไว้เพื่อรักษารูปแบบโครงสร้างหน้าจอ โดยไม่แยกโมเดลในขั้นตอนการส่งออก
function handleModelPartChange(selectElement) {
    // ไม่มีการเปลี่ยนแปลงแอนิเมชันตามประเภทโมเดล
}

function removeItemRow(rowId){
    const row = document.getElementById(rowId);
    if (!row) return;
    const itemId = getRowItemId(row);
    if (!confirm(`ท่านต้องการลบรายการไอเทม "${itemId || 'รายการนี้'}" ใช่หรือไม่?`)) return;
    row.remove();
}

function addItemRow() {
    const tbody = document.getElementById('itemTableBody');
    const row = document.createElement('tr');
    row.id = `row-${itemCount}`;
    
    row.innerHTML = `
        <td data-label="รหัสไอเทม (ID)"><input type="text" class="item-id" value="bunny_item_${itemCount}"></td>
        <td data-label="ชื่อที่แสดงในเกม"><input type="text" class="item-name" value="Bunny Item ${itemCount}"></td>
        <td data-label="ประเภท / ช่องสวมใส่ (Slot)">
            <select class="item-slot">
                <optgroup label="👕 เครื่องแต่งกาย (Wearable)">
                    <option value="slot.armor.chest" selected>ส่วนลำตัว (Chest)</option>
                    <option value="slot.armor.head">ส่วนศีรษะ (Head)</option>
                    <option value="slot.armor.legs">ส่วนขา (Legs)</option>
                    <option value="slot.armor.feet">ส่วนเท้า (Feet)</option>
                </optgroup>
            </select>
        </td>
        <td data-label="รูปแบบแอนิเมชัน">
            <select class="model-type">
                <option value="animated">🏃ขยับได้</option>
                <option value="static">🧍 ไม่ขยับได้</option>
            </select>
        </td>
        <td data-label="องค์ประกอบโมเดล (Parts)">
            <select class="model-part" onchange="handleModelPartChange(this)">
                <option value="body_no_head">👕 เฉพาะลำตัวไม่มีหัว</option>
                <option value="head_only" selected>👑 เฉพาะหัว</option>
                <option value="full_body">🧍เต็มตัว</option>
            </select>
        </td>
        <td data-label="RP ไอคอน">
            <input type="file" class="file-icon" accept="image/png" onchange="updateFileStatus(this)">
            <div class="file-status" style="font-size:10px; color:#6fa073; margin-top:4px; font-weight:bold;"></div>
        </td>
        <td data-label="RP สกินโมเดล">
            <input type="file" class="file-skin" accept="image/png" onchange="updateFileStatus(this)">
            <div class="file-status" style="font-size:10px; color:#6fa073; margin-top:4px; font-weight:bold;"></div>
        </td>
        <td style="text-align:center;"><span class="remove-btn" onclick="removeItemRow('${row.id}')">✖</span></td>
    `;
    tbody.appendChild(row);
    itemCount++;
}

// ฟังก์ชันสำหรับอัปเดตสถานะการอัปโหลดไฟล์
function updateFileStatus(input) {
    const statusDiv = input.nextElementSibling;
    if (input.files && input.files.length > 0) {
        statusDiv.innerText = "✅ อัปโหลดสำเร็จ: " + input.files[0].name;
    } else {
        statusDiv.innerText = "";
    }
}

async function resizeImage(file, size) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = size; canvas.height = size;
                const ctx = canvas.getContext('2d');
                ctx.imageSmoothingEnabled = false;
                ctx.drawImage(img, 0, 0, size, size);
                canvas.toBlob((blob) => resolve(blob), 'image/png');
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });
}

function safeFileName(text) {
    return text.replace(/[^\w\s-]/gi, '').trim().replace(/\s+/g, '_');
}

function getModelJSON(modelPart, id) {
    const builder = window.MODEL_LIBRARY[modelPart] || window.MODEL_LIBRARY.full_body;
    return builder(id);
}

async function buildAddonPack(globalZip, rows, packInGameName, packDesc, NAMESPACE, size, mainIconFile, folderBaseName) {
    const folderSafeName = safeFileName(folderBaseName) || "Cafe_Bunny";
    const bpFolder = globalZip.folder(`${folderSafeName}_BP`);
    const rpFolder = globalZip.folder(`${folderSafeName}_RP`);

    const copyrightJsonContent = {
        "copyright": "© 2026 Nuttsumechan. All Rights Reserved.",
        "author": "Nuttsumechan",
        "notice_th": "ห้ามมิให้ทำการคัดลอก ดัดแปลง แก้ไข หรือแจกจ่ายโครงสร้างสคริปต์นี้โดยเด็ดขาด",
        "notice_en": "Unauthorized copying, modification, or distribution of this script structure is strictly prohibited.",
        "legal_protection": "Protected under the Copyright Act of Thailand B.E. 2537 and international treaties."
    };
    
    bpFolder.file("COPYRIGHT_NOTICE.json", stringifyJsonWithCopyright(copyrightJsonContent));
    rpFolder.file("COPYRIGHT_NOTICE.json", stringifyJsonWithCopyright(copyrightJsonContent));

    if (mainIconFile) {
        bpFolder.file("pack_icon.png", mainIconFile);
        rpFolder.file("pack_icon.png", mainIconFile);
    }

    const bpItems = bpFolder.folder("items");
    const bpRecipes = bpFolder.folder("recipes");
    const rpAttach = rpFolder.folder("attachables");
    const rpModels = rpFolder.folder("models/entity");
    const rpAnims = rpFolder.folder("animations");
    
    const hasArmorWithAnimations = rows.some(row =>
        ['animated', 'static'].includes(row.querySelector('.model-type')?.value) &&
        row.querySelector('.item-slot')?.value?.startsWith('slot.armor')
    );
    if (hasArmorWithAnimations) {
        const animationLibraries = window.ANIMATION_LIBRARY || {};
        const exportedAnimations = new Map();

        ['eye', 'movement', 'face'].forEach(libraryName => {
            const library = animationLibraries[libraryName];
            if (!library || !library.animations) return;
            Object.entries(library.animations).forEach(([identifier, animationData]) => {
                const shortName = identifier.split('.').pop();
                if (!shortName || exportedAnimations.has(shortName)) return;
                exportedAnimations.set(shortName, {
                    format_version: library.format_version || '1.8.0',
                    animations: { [identifier]: animationData }
                });
            });
        });

        exportedAnimations.forEach((animationFileData, animationName) => {
            rpAnims.file(`animation.${safeFileName(animationName)}.json`, JSON.stringify(animationFileData, null, 2));
        });
    }
    const rpTexItems = rpFolder.folder("textures/items");
    const rpTexSkin = rpFolder.folder("textures/entity/pamobile");
    const rpTexts = rpFolder.folder("texts");

    let textureAtlas = { "resource_pack_name": packInGameName, "texture_name": "atlas.items", "texture_data": {} };
    let langData = getInjectCopyrightComment(true) + `${NAMESPACE}:itemGroup.name.racePack=§l§6${packInGameName} §r§7By Nuttsumechan\n\n`;
    let createdItemIdentifiers = [];

    for (const row of rows) {
        const rawId = row.querySelector('.item-id').value.trim().toLowerCase();
        const id = safeFileName(rawId);
        const displayName = row.querySelector('.item-name').value.trim();
        const slotValue = row.querySelector('.item-slot').value;
        const modelType = row.querySelector('.model-type').value;
        const selectedModelPart = row.querySelector('.model-part').value;
        const modelPart = 'head_only';
        const iconFile = row.querySelector('.file-icon').files[0];
        const skinFile = row.querySelector('.file-skin').files[0];

        if (!id) continue;

        const fullIdentifier = `${NAMESPACE}:${id}`;
        createdItemIdentifiers.push(fullIdentifier);

        if (iconFile) {
            const resized = await resizeImage(iconFile, size);
            rpTexItems.file(`${id}.png`, resized);
        }
        if (skinFile) {
            rpTexSkin.file(`${id}.png`, skinFile);
        }

        let itemComponents = {
            "minecraft:max_stack_size": 1,
            "minecraft:icon": { "texture": id },
            "minecraft:display_name": { "value": `item.${NAMESPACE}:${id}.name` }
        };

        if (slotValue.startsWith("slot.armor")) {
            itemComponents["minecraft:wearable"] = { "slot": slotValue };
        } else if (slotValue === "food") {
            itemComponents["minecraft:food"] = { "nutrition": 4, "saturation_modifier": "low" };
            itemComponents["minecraft:use_animation"] = "eat";
            itemComponents["minecraft:use_modifiers"] = { "use_duration": 1.6, "movement_modifier": 0.35 };
        }

        const finalItemJSON = {
            "format_version": "1.20.50",
            "minecraft:item": {
                "description": { 
                    "identifier": fullIdentifier, 
                    "menu_category": { 
                        "category": slotValue === "food" ? "nature" : "equipment",
                        "group": `${NAMESPACE}:itemGroup.name.racePack`
                    } 
                },
                "components": itemComponents
            }
        };
        bpItems.file(`${id}.json`, stringifyJsonWithCopyright(finalItemJSON));

        if (slotValue.startsWith("slot.armor")) {
            let attachAnimations = {};
            let attachScripts = {};

            if (modelType === "animated") {
                attachAnimations = {
                    eye: "animation.cafebunny.eye",
                    fly: "animation.cafebunny.fly",
                    walk: "animation.cafebunny.walk"
                };
                attachScripts = {
                    animate: [
                        { "eye": "query.is_alive" },
                        { "fly": "query.is_alive" },
                        { "walk": "query.ground_speed > 1.0" }
                    ]
                };
            } else if (modelType === "static") {
                attachAnimations = { walk: "animation.cafebunny.walk" };
                attachScripts = {
                    animate: [
                        { "walk": "query.ground_speed > 1.0" }
                    ]
                };
            }

            const attachJSON = {
                "format_version": "1.20.30",
                "minecraft:attachable": {
                    "description": {
                        "identifier": fullIdentifier,
                        "materials": { "default": "armor" },
                        "textures": { "default": `textures/entity/pamobile/${id}` },
                        "geometry": { "default": `geometry.${id}` },
                        "animations": attachAnimations,
                        "scripts": attachScripts,
                         "render_controllers": ["controller.render.default"]
                    }
                }
            };
            rpAttach.file(`${id}.json`, stringifyJsonWithCopyright(attachJSON));

            const modelJSON = getModelJSON(modelPart, id);
            rpModels.file(`model.geo.${id}.json`, stringifyJsonWithCopyright(modelJSON));
        }

        textureAtlas.texture_data[id] = { "textures": `textures/items/${id}` };
        langData += `item.${NAMESPACE}:${id}.name=${displayName}\n`;
    }

    if (createdItemIdentifiers.length >= 1) {
        const firstItemIdentifier = createdItemIdentifiers[0];

        const catalogJSON = {
            "format_version": "1.21.60",
            "minecraft:crafting_items_catalog": {
                "categories": [
                    { 
                        "category_name": "equipment", 
                        "groups": [ 
                            { 
                                "group_identifier": { 
                                    "icon": firstItemIdentifier, 
                                    "name": `${NAMESPACE}:itemGroup.name.racePack` 
                                }, 
                                "items": createdItemIdentifiers 
                            } 
                        ] 
                    }
                ]
            }
        };
        bpRecipes.file("crafting_item_catalog.json", stringifyJsonWithCopyright(catalogJSON));
    }

    rpFolder.file("textures/item_texture.json", stringifyJsonWithCopyright(textureAtlas));
    rpTexts.file("en_US.lang", langData);

    const makeUUID = () => {
        if (window.crypto && typeof window.crypto.randomUUID === "function") {
            return window.crypto.randomUUID();
        }
        if (window.crypto && typeof window.crypto.getRandomValues === "function") {
            const bytes = new Uint8Array(16);
            window.crypto.getRandomValues(bytes);
            bytes[6] = (bytes[6] & 0x0f) | 0x40;
            bytes[8] = (bytes[8] & 0x3f) | 0x80;
            const hex = Array.from(bytes, b => b.toString(16).padStart(2, "0")).join("");
            return `${hex.slice(0,8)}-${hex.slice(8,12)}-${hex.slice(12,16)}-${hex.slice(16,20)}-${hex.slice(20)}`;
        }
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            const v = c === "x" ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };

    const bpHeaderUUID = makeUUID();
    const bpModuleUUID = makeUUID();
    const rpHeaderUUID = makeUUID();
    const rpModuleUUID = makeUUID();

    bpFolder.file("manifest.json", stringifyJsonWithCopyright({
        "format_version": 2,
        "header": { "name": `${packInGameName} (BP)`, "description": `${packDesc} | © 2026 Nuttsumechan`, "uuid": bpHeaderUUID, "version": [1, 0, 0], "min_engine_version": [1, 26, 20] },
        "modules": [{ "type": "data", "uuid": bpModuleUUID, "version": [1, 0, 0] }],
        "dependencies": [{ "uuid": rpHeaderUUID, "version": [1, 0, 0] }]
    }));

    rpFolder.file("manifest.json", stringifyJsonWithCopyright({
        "format_version": 2,
        "header": { "name": `${packInGameName} (RP)`, "description": `${packDesc} | © 2026 Nuttsumechan`, "uuid": rpHeaderUUID, "version": [1, 0, 0], "min_engine_version": [1, 26, 20] },
        "modules": [{ "type": "resources", "uuid": rpModuleUUID, "version": [1, 0, 0] }]
    }));

    return folderSafeName;
}

async function processDownload() {
    const confirmButton = document.getElementById('confirmDownloadBtn');
    const originalButtonText = confirmButton ? confirmButton.textContent : 'ยอมรับและดาวน์โหลด';
    if (confirmButton) { confirmButton.disabled = true; confirmButton.textContent = '⏳ กำลังประมวลผลไฟล์...'; }
    try {
        closeCopyrightModal();
        const rows = Array.from(document.querySelectorAll('#itemTableBody tr'));
        if (!rows.length) throw new Error('กรุณาเพิ่มรายการไอเทมอย่างน้อย 1 รายการก่อนทำการดาวน์โหลด');
        if (typeof JSZip === 'undefined' || typeof saveAs !== 'function') throw new Error('ไม่สามารถโหลดไลบรารีสร้างไฟล์ได้ กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตของท่าน');
        const packInGameName = document.getElementById('addonName').value.trim() || 'Cafe Bunny Pack';
        const packDesc = '§6 ร้าน  Cafe Bunny §l ติดต่อสอบถามได้ที่ Discord https://discord.gg/AJTSE8YXpB';
        const NAMESPACE = 'cafebunny';
        const size = parseInt(document.getElementById('globalSize').value, 10) || 32;
        let mainIconFile = document.getElementById('addonIcon').files[0] || null;
        if (mainIconFile && !mainIconFile.type.includes('png')) {
            mainIconFile = await new Promise((resolve, reject) => {
                const img = new Image(), url = URL.createObjectURL(mainIconFile);
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.naturalWidth || 256; canvas.height = img.naturalHeight || 256;
                    canvas.getContext('2d').drawImage(img, 0, 0);
                    canvas.toBlob(blob => { URL.revokeObjectURL(url); blob ? resolve(new File([blob], 'pack_icon.png', {type:'image/png'})) : reject(new Error('การแปลงไฟล์รูปภาพไอคอนไม่สำเร็จ')); }, 'image/png');
                };
                img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('ไม่สามารถอ่านข้อมูลไฟล์รูปภาพไอคอนได้')); };
                img.src = url;
            });
        }
        const baseName = safeFileName(packInGameName) || 'Cafe_Bunny';
        const addonZip = new JSZip();
        await buildAddonPack(addonZip, rows, packInGameName, packDesc, NAMESPACE, size, mainIconFile, 'Full_Set');
        const blob = await addonZip.generateAsync({type:'blob'});
        saveAs(blob, `${baseName}.mcaddon`);
    } catch (error) {
        console.error('Download error:', error);
        alert(`ไม่สามารถสร้างไฟล์แอดออนได้ในขณะนี้\n\nรายละเอียด: ${error?.message || error}`);
    } finally {
        if (confirmButton) { confirmButton.disabled = false; confirmButton.textContent = originalButtonText; }
    }
}

// สร้างแถวข้อมูลตั้งต้นสำหรับผู้ใช้งานโดยอัตโนมัติ
addItemRow();
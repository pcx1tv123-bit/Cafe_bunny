/* ANIMATION SOURCE: movement
 * โค้ดต้นทางของอนิเมชัน movement == หน้าอก ; ระบบส่งออกจะรวม/บันทึกแต่ละชุดครั้งเดียวต่อ RP
 */
window.ANIMATION_LIBRARY = window.ANIMATION_LIBRARY || {};
window.ANIMATION_LIBRARY.movement = {"format_version":"1.8.0","animations":{"animation.cafebunny.fly":{"loop":true,"bones":{"Hair":{"relative_to":{"rotation":"entity"},"rotation":["-math.clamp(math.lerp(0, -110, query.cape_flap_amount) - (13 * query.modified_move_speed), -90, 0)+query.eye_target_y_rotation","query.target_y_rotation",0]}}},"animation.cafebunny.walk":{"loop":true}}};


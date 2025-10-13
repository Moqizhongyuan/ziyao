/**
 * 全局类型声明文件
 * 用于声明 CSS、图片等资源模块
 */

// 声明 CSS 文件模块
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

// 声明 CSS Modules
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// 声明 SCSS 文件
declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

// 声明图片资源
declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.gif" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "*.webp" {
  const value: string;
  export default value;
}

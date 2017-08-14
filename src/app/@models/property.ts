/**
 * Property Model
 */
export class Property {
    price: string;
    agency: PropertyAgency;
    id: number;
    mainImage: string;
    constructor(propertyData?: any) {
        if (propertyData) {
            // Add property data attributes to this property model
            for (const key of Object.keys(propertyData)) {
                this[key] = propertyData[key];
            }
        }
    }
}

/**
 * Branding Color Interface
 */
interface BrandingColor {
    primary: string;
}

/**
 * Property Agency Interface
 */
interface PropertyAgency {
    brandingColors: BrandingColor;
    logo: string;
}

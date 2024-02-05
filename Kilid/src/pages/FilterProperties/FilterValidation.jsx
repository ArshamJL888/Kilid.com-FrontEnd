import { number, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
function FilterValidation() {

    const { t } = useTranslation();

    const schema = z.object({
        city: z.string()
            .min(2, { message: t("You should enter at list 2 characters") }),
        usage: z.string(),
        type: z.string(),
        zone: z.string().default(""),
        minMortgage: z.string().min(0).default("0"),
        maxMortgage: z.string().min(0).default("5000000000"),
        minRentCost: z.string().min(0).default("0"),
        maxRentCost: z.string().min(0).default("250000000"),
        minPreCost: z.string().min(0).default("0"),
        maxPreCost: z.string().min(0).default("3000000000"),
        minSellCost: z.string().min(0).default("0"),
        maxSellCost: z.string().min(0).default("30000000000"),
        minArea: z.string().regex(/^\d+$/i, { message: "تنها عدد مجاز است" }),
        maxArea: z.string().regex(/^\d+$/i, { message: "تنها عدد مجاز است" }),
        minAge: z.string().regex(/^\d+$/i, { message: "تنها عدد مجاز است" }),
        maxAge: z.string().regex(/^\d+$/i, { message: "تنها عدد مجاز است" }),
        numOfRooms: z.string().default("1"),
    })

    return zodResolver(schema);
}

export default FilterValidation;
// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const articles = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        group: z.string(),
        time: z.date(),
        images: z.array(z.string()).optional()
    })
});

const trainers = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        short_description: z.string(),
        phone: z.string(),
        
        achievements: z.array(z.object({title: z.string(), items: z.array(z.string())}))
    })
});

const products = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        type: z.literal("accessories").or(z.literal("clothing")),
        price: z.number(),
        description: z.string(),
        pictures: z.array(z.string()).optional()
    })
});

const galleries = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        main_picture: z.string(),
        all_pictures: z.array(z.object({team: z.string(), pictures: z.array(z.string())}))
    })
});

const trainingGroups = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        groupPhoto: z.any(),
        league: z.string().optional(),
        years: z.array(z.number()),
        trainerName: z.string(),
        trainerNumber: z.number(),
        trainerPhoto: z.any(),
        trainings: z.array(z.object({day: z.string(), hour: z.string()}))
    })
});

const camps = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        place: z.string(),
        hotel: z.string(),
        hotelImage: z.string(),
        departure: z.string(),
        departureHour: z.string(),
        return: z.string(),
        returnHour: z.string(),
        price: z.string(),
        isCurrent: z.boolean(),
        groupPhoto: z.string(),
        firstPay: z.string(),
        secondPay: z.string(),
        hotelPhotos: z.array(z.string())
    })
})

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'articles': articles,
  'trainers': trainers,
  'products': products,
  'galleries' : galleries,
  'trainingGroups' : trainingGroups,
  'camps' : camps
};

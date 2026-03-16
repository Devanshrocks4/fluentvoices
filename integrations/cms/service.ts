import { WixDataItem } from "./types";

// Mock data for static site
const mockData: Record<string, any[]> = {
  podcasts: [
    {
      _id: "1",
      episodeTitle: "Sample Podcast Episode",
      description: "This is a sample podcast episode description.",
      youTubeEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnailImage: "https://via.placeholder.com/400x225",
      publicationDate: new Date("2023-10-01"),
    },
  ],
  events: [
    {
      _id: "1",
      eventTitle: "Sample Event",
      eventDateTime: new Date("2023-11-01T10:00:00"),
      description: "This is a sample event description.",
      eventPhoto: "https://via.placeholder.com/400x300",
      isUpcoming: true,
      location: "Sample Location",
      registrationLink: "https://example.com",
    },
  ],
  csrinitiatives: [
    {
      _id: "1",
      initiativeTitle: "Sustain Nest",
      descriptionOfImpact: "Our dedicated platform for sustainable living and environmental education.",
      initiativeImage: "https://static.wixstatic.com/media/05a073_45574df411374d9bb330341a015cf350~mv2.png?originWidth=1152&originHeight=896",
      initiativeDate: new Date("2024-10-01"),
      callToActionURL: "https://sustain-nest.lovestoblog.com",
    },
    {
      _id: "2",
      initiativeTitle: "Education for All",
      descriptionOfImpact: "Providing educational resources and mentorship to underprivileged students in rural areas.",
      initiativeImage: "https://static.wixstatic.com/media/05a073_8a5f393eceac478eb8703da4d75d0209~mv2.jpeg",
      initiativeDate: new Date("2024-09-15"),
      callToActionURL: "https://example.com/education",
    },
    {
      _id: "3",
      initiativeTitle: "Community Health Drive",
      descriptionOfImpact: "Organizing health camps and awareness programs in local communities.",
      initiativeImage: "https://static.wixstatic.com/media/05a073_eeb292ddfcf0440f986488a1da7d0a0d~mv2.png?originWidth=1152&originHeight=640",
      initiativeDate: new Date("2024-08-20"),
      callToActionURL: "https://example.com/health",
    },
  ],
  ngopartners: [
    {
      _id: "1",
      partnerName: "Sample NGO",
      logoImage: "https://via.placeholder.com/200x100",
      websiteUrl: "https://example.com",
      description: "This is a sample NGO description.",
      partnershipStartDate: new Date("2023-01-01"),
    },
  ],
  missionvalues: [
    {
      _id: "1",
      title: "Empowerment",
      tagline: "Unlock your potential",
      description: "Empowerment description",
      pillarImage: "https://via.placeholder.com/300x300",
      displayOrder: 1,
    },
  ],
  sociallinks: [
    {
      _id: "1",
      platformName: "Instagram",
      platformUrl: "https://instagram.com",
      iconImage: "https://via.placeholder.com/50x50",
      description: "Follow us on Instagram",
      isActive: true,
    },
  ],
};

/**
 * Mock CRUD Service for static site
 */
export class BaseCrudService {
  static async getAll<T extends WixDataItem>(collectionId: string): Promise<{ items: T[] }> {
    const data = mockData[collectionId] || [];
    return { items: data as T[] };
  }

  // Other methods can be added if needed
  static async getById<T extends WixDataItem>(collectionId: string, id: string): Promise<T | null> {
    const data = mockData[collectionId] || [];
    return (data.find(item => item._id === id) as T) || null;
  }

  static async create<T extends WixDataItem>(collectionId: string, item: Omit<T, '_id'>): Promise<T> {
    // Mock create
    const newItem = { ...item, _id: Date.now().toString() } as T;
    mockData[collectionId] = mockData[collectionId] || [];
    mockData[collectionId].push(newItem);
    return newItem;
  }

  static async update<T extends WixDataItem>(collectionId: string, id: string, updates: Partial<T>): Promise<T> {
    const data = mockData[collectionId] || [];
    const index = data.findIndex(item => item._id === id);
    if (index !== -1) {
      data[index] = { ...data[index], ...updates };
      return data[index] as T;
    }
    throw new Error("Item not found");
  }

  static async delete<T extends WixDataItem>(collectionId: string, id: string): Promise<T> {
    const data = mockData[collectionId] || [];
    const index = data.findIndex(item => item._id === id);
    if (index !== -1) {
      const deleted = data.splice(index, 1)[0] as T;
      return deleted;
    }
    throw new Error("Item not found");
  }
}

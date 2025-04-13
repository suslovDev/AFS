import { makeAutoObservable } from 'mobx';
import { Organization, Photo } from '@shared/types';

class OrganizationStore {
  organization: Organization | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setOrganization(organization: Organization) {
    this.organization = organization;
  }

  updateOrganization(partialCompany: Partial<Organization>) {
    if (this.organization) {
      this.organization = { ...this.organization, ...partialCompany };
    }
  }

  removeOrganization(id: string) {
    if (this.organization && this.organization.id === id) {
      this.organization = null;
    }
  }

  addPhoto(photo: Photo) {
    if (this.organization) {
      this.organization.photos.push(photo);
    }
  }

  removePhoto(photoName: string) {
    if (this.organization) {
      this.organization.photos = this.organization.photos.filter(
        (photo) => photo.name !== photoName
      );
    }
  }
}

const organizationStore = new OrganizationStore();
export default organizationStore;
